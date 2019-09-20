import React, { useEffect, useState } from "react";
import axios from 'axios';

const locationApi = "https://rickandmortyapi.com/api/location/";
function LocationList(){
    axios.get(locationApi)
    .then(res)
}
export default function LocationsList() {}
