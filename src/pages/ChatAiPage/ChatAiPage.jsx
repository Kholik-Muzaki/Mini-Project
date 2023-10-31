import React, { useState } from "react";
import TextArea from "../../../src/components/ChatAi/TextArea";
import OpenAI from "openai";
import { ThreeDots } from "react-loader-spinner";
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatAI = () => {
    const [command, setCommand] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");

    const openai = new OpenAI({
        apiKey: "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",
        dangerouslyAllowBrowser: true,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await openai.chat.completions.create({
            messages: [{ role: "system", content: command }],
            model: "gpt-3.5-turbo",
        });
        setResult(res.choices[0].message.content);
        setLoading(false);
    };

    return (
        <div className="container mt-5">
            <h2 className="fw-bold text-center mb-4">Chat AI</h2>
            <div className="row">
                <div className="col mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <TextArea
                                name="command"
                                id="command"
                                value={command}
                                onChange={(e) => setCommand(e.target.value)}
                                placeholder="Masukkan perintah..."
                                className="form-control"
                            />
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Submit Text"}
                            </button>
                        </div>
                    </form>
                    {loading ? (
                        <div className="text-center">
                            <ThreeDots
                                height="80"
                                width="80"
                                radius="9"
                                color="blue"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </div>
                    ) : (
                        <div>
                            <p>{result}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatAI;
