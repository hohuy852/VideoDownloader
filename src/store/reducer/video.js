import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../../services/authHeader";
export const getVideo = createAsyncThunk("video/getVideo", async (url) => {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  if (match && match[7].length === 11) {
    var options = {
      method: "GET",
      url: "https://ytstream-download-youtube-videos.p.rapidapi.com/dl",
      params: { id: match[7], geo: "DE" },
      headers: authHeader(),
    };
    const response = await axios.request(options);
    return response.data;
  }
});

const videoSlice = createSlice({
  name: "downloader",
  initialState: {
    ytbVideo: [],
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVideo.pending, (state, action) => {
      state.loading = true
    });
    builder.addCase(getVideo.fulfilled, (state, action) => {
      state.ytbVideo = action.payload;
      state.loading = false
      console.log(action.payload)
    });
  },
});
//mutaion 
const videoReducer = videoSlice.reducer;
//getter
export const videoSelector = (state) => state.videoReducer;

export default videoReducer;
