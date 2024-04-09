export declare class SmartAssistant {
    page: string;
    isChatbotVisible: boolean;
    query: string;
    feedback: string[];
    chatHistory: any[];
    refinedQuery: string;
    refinedQueryHidden: boolean;
    isLoading: boolean;
    showEmptyQueryMessage: boolean;
    currentResponseIndex: number;
    isProblem: boolean;
    selectedFeedback: any[];
    feedbackSubmitted: any[];
    errorMessage: string;
    session_id: any;
    starttime: any;
    showSource: boolean;
    sourceSet: Array<any>;
    currentQuestionIndex: number;
    element: HTMLElement;
    chat_secretkey: string;
    isOpen: boolean;
    toggleChatbot(): void;
    handleEscape(): void;
    componentWillLoad(): void;
    scrollToBottom: () => void;
    getToken(): Promise<void>;
    handleRefreshSession: () => void;
    handleChatClick: () => void;
    handleQuerySubmit(): Promise<void>;
    saveFeedbackToDatabase(index: number, feedbackLabel: string): Promise<void>;
    handleFeedback(index: any, isPositive: any): Promise<void>;
    handleBotMessageClick(botMessage: any): void;
    toggleRefinedQueryVisibility: () => void;
    toggleShowSource: () => void;
    handleKeyPress: (event: KeyboardEvent) => void;
    inputRef: HTMLInputElement;
    componentDidUpdate(): void;
    render(): any;
}
