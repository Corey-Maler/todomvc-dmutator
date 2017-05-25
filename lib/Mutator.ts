import { Store as dStore } from './Store';

export const dMutator = <StoreTemplate>(fn) => {
    const stack = [];
    const a = (payload: any) => {
        return {
            execute(store: dStore<StoreTemplate>) {
                const res = fn(payload, store.state, store.dispatch);
                store.setState(res);
                stack.map(f => {
                    const bbb = f(payload).execute(store);
                })
                return res;
            }
        }
    }

    return a;
};