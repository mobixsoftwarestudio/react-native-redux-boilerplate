import axios, { AxiosRequestConfig } from 'axios';

//  TODO ->Create a function to check if exists internet conectivity

export default function request(config: AxiosRequestConfig) {
	config.timeout = 7000;
	//  TODO ->Call netinfo function to check internet before call the requests
	return axios.request(config);
}
