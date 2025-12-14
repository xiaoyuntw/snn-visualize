import { Synapse } from "./Synapse.js";
export declare class Neuron {
    readonly id: number;
    readonly base_threshold: number;
    threshold: number;
    voltage: number;
    private v_loss;
    private v_update;
    private t_update;
    private alpha;
    private beta;
    private callbacks;
    spiked: boolean;
    connected: boolean;
    element: HTMLElement;
    hover: boolean;
    constructor(id: number);
    registerSpike(f: (v: number) => void): void;
    nexttick(dt: number): void;
    updateElement(): void;
    getVoltage(): number;
    add(x: number): void;
    connect(n: Neuron): Synapse;
    spike(): void;
}
//# sourceMappingURL=Neuron.d.ts.map