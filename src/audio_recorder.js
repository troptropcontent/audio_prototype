import { useState, useEffect } from 'react';
import { GetUserMediaChecking } from './get_user_media_checking';
import { GetUserMediaNotSupported } from './get_user_media_not_supported';
import { GetUserMediaSupported } from './get_user_media_supported';



export function AudioRecorder() {
  const [isGetUserMediaSupported, setIsGetUserMediaSupported] = useState("checking")

    useEffect(() => {
        navigator.mediaDevices.getUserMedia ? setIsGetUserMediaSupported("supported") : setIsGetUserMediaSupported("not_supported")
    }, [isGetUserMediaSupported]);
    

    switch (isGetUserMediaSupported) {
        case "supported":
            return <GetUserMediaSupported/>
            break;
        case "not_supported":
            return <GetUserMediaNotSupported/>
            break;
        default:
            return <GetUserMediaChecking/>
            break;
    }
};
  