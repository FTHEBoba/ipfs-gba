import React, { useEffect, useRef, useState } from 'react';
import gameboy from 'gameboy';
import { loadRomFromIPFS } from '../../utils/ipfs';
// const XAudioServer = require('XAudioJS');

const buttons = ['right', 'left', 'up', 'down', 'a', 'b', 'select', 'start'];

export default function GBA(props: any) {
    const gbElm = useRef(null);
    const { opts } = props;
    const [gb, setGb] = useState();

    useEffect(() => {
        loadRomFromIPFS('QmPJD8k2Lawf6hEo79AjUGFU8xoZ6bNMjC12GM9AAPrA7v', (rom: any) =>
            setGb(gameboy(gbElm, rom, opts))
        );
    }, []);

    useEffect(() => {
        if (gb) {
            // gb.stopEmulator = 1;
            // gb.start();
            console.log(gb);
        }
    }, [gb]);

    return (
        <>
            <canvas className='gameboy' ref={gbElm}></canvas>
        </>
    );
}
