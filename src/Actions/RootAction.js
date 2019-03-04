import axios from "axios";

export const loadColor = () => dispatch => {
    return axios({
        method:'get',
        url:'http://www.colr.org/json/color/random',
    })
    .then(function (response) {
        dispatch(changeColor("#" + response.data.new_color))
    });
}

export const changeColor = (color) => ({
  type: "CHANGE_COLOR",
  color: color
})
