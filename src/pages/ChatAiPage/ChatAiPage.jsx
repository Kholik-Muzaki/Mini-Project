import React, { useState } from "react";
import TextArea from "../../components/ChatAi/TextArea";
import { ThreeDots } from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css";

const ChatAI = () => {
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);
    const [answer, setAnswer] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const apiKey = "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";

        try {
            const response = await fetch("https://api.openai.com/v1/engines/gpt-3.5-turbo/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    prompt: `Tentang pariwisata di ${question}`,
                    max_tokens: 100, // Sesuaikan dengan jumlah token maksimum yang Anda inginkan
                    temperature: 0.7, // Atur suhu lebih rendah untuk respons yang lebih fokus
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setAnswer(data.choices[0].text);
            } else {
                console.error("Gagal mengirim permintaan ke OpenAI:", response.statusText);
            }
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
        }

        setLoading(false);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <TextArea
                                name="question"
                                id="question"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder="Tanyakan sesuatu tentang wisata..."
                                className="form-control"
                            />
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Kirim Pertanyaan"}
                            </button>
                        </div>
                    </form>
                    {loading ? (
                        <div className="text-center">
                            <ThreeDots color="blue" height={100} width={100} />
                        </div>
                    ) : (
                        <div>
                            <p>{answer}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatAI;
