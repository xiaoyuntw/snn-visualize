import { Neuron } from './Neuron.js';
import type { Synapse } from './Synapse.js';
declare class Pool {
    neurons: Neuron[];
    synapses: Synapse[];
    size: number;
    canvas: HTMLCanvasElement | null;
    constructor(c: number);
    sim(net: HTMLCanvasElement): void;
    tick(dt: number): void;
    createGraphIn(v: HTMLElement): void;
    updateCanvas(): void;
}
declare const _default: Pool;
export default _default;
//# sourceMappingURL=main.d.ts.map