import React from "react";
import { useContext, useEffect, useState, } from 'react';

export const useToggle = (initialValue = false) => {

    const [state, setState] = useState(initialValue);

    const toggle = () => { setState((prev => !prev )); };

    return {state, toggle};

}

