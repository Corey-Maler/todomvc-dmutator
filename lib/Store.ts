export class Store<T> {
    private updateHandlers = [];
    public state: T;

    constructor(initialState: T) {
        this.state = initialState;
    }

    public setState = (newState: T) => {
        this.state = newState;
    }

    dispatch = (action) => {
        console.log('dispatching', true);
        const newState = action.execute(this);
        console.log('mutation done, updating view');
        this.updateHandlers.map(f => f());
    }

    onUpdate = (fn) => {
        this.updateHandlers.push(fn);
    }
}