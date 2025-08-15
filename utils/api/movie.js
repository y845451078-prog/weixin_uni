import {
	myRequest
} from "@/utils/http.js";

import {
	domain
} from "@/utils/config/url.js";

export const movieLists = (params) => myRequest({
	"domain": domain.movice,
	"url": "/api/movie.index/searchByName",
	"data": params
})