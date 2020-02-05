export interface ActionTransition {
    transitionType: 'before' | 'after';
    actionName: string;
    data?: any;
}