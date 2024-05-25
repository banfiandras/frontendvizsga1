import Axios from "axios";
Axios.defaults.baseURL = "https://vizsga2023.cluster.jedlik.eu/";

export default {
  getAllLocations() {
    return Axios.get("/api/locations")
      .then((resp) => {
        //console.log(resp.data);
        return resp.data;
      })
      .catch((err) => {
        //console.log(err);
        return Promise.reject(err);
      });
  },
  getAllViewpoints() {
    return Axios.get("/api/viewpoints")
      .then((resp) => {
        //console.log(resp.data);
        return resp.data;
      })
      .catch((err) => {
        //console.log(err);
        return Promise.reject(err);
      });
  },
  getViewpointsById(locationName) {
    return Axios.get(`/api/locations/${locationName}/viewpoints`)
      .then((resp) => {
        //console.log(resp.data);
        return resp.data;
      })
      .catch((err) => {
        //console.log(err);
        return Promise.reject(err);
      });
  },
  saveRating(rating) {
    return Axios.post("/rating", rating).then(() => {});
  },
  // updateUser(módosítottObjektum, id) {
  //   return Axios.put(`/valamik/${id}`, módosítottObjektum).then(() => {});
  // },
};
