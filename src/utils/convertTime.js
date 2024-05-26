const convertTime = (time)=>{
    const min = Math.floor((time % (60 * 60 * 1000))/(60 * 1000));
    const sec = Math.floor((time % (60 * 1000))/1000);
    return `${min} : ${sec}`;
}

export default convertTime;