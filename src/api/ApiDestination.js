import axios, { AxiosError } from "axios";

const APIURL = import.meta.env.VITE_URL_MOCKAPI

export const APIDestination = {
  //GET all destination
  getDestination: async () => {
    try {
      const result = await axios.get(`${APIURL}/destination`);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },

  //GET destination by ID
  getDestinationById: async (id) => {
    try {
      const result = await axios.get(`${APIURL}/destination/${id}`);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },

  // GET only posted destinations
  getPostedDestinations: async () => {
    try {
      const result = await axios.get(`${APIURL}/destination?posted=true`);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },


  //POST destination or create new destination
  postDestination: async (data) => {
    try {
      const result = await axios.post(`${APIURL}/destination`, data);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },

  //DELETE destination
  deleteDestination: async (id) => {
    try {
      const result = await axios.delete(`${APIURL}/destination/${id}`);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },

  //UPDATE or EDIT destination
  updateDestination: async (id, data) => {
    try {
      const result = await axios.put(`${APIURL}/destination/${id}`, data);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },
};