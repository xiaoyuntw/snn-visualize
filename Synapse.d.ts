import type { Neuron } from "./Neuron.js";
export declare class Synapse {
    pre: Neuron;
    post: Neuron;
    preTrace: number;
    postTrace: number;
    tau: number;
    weight: number;
    ei: number;
    constructor(pre: Neuron, post: Neuron);
    onPreSpike(v: number): void;
    onPostSpike(v: number): void;
    nexttick(dt: number): void;
    applySTDP(): void;
}
//# sourceMappingURL=Synapse.d.ts.map