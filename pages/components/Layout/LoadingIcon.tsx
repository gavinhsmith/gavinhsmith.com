import { Component } from "react";

const chars = ["|", "/", "-", "\\"];

interface LoadingIconStates {
    current: number,
    interval: any
}

export default class LoadingIcon extends Component<{}, LoadingIconStates> {

    state = {
        current: 0,
        interval: null
    }

    constructor() {
        super({});
        this.createTimer(4);
    }

    createTimer(ips: number) {
        return setInterval(() => {
            this.setState({
                current: (this.state.current + 1) % chars.length
            })
        }, 1000/ips);
    }

    render() {
        return <span>[{chars[this.state.current]}]</span>
    }
}