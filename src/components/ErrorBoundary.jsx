import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        // В состоянии храним, произошла ли ошибка
        this.state = { hasError: false, error: null };
    }

    // Этот метод вызывается автоматически, если внутри «детей» произошел сбой.
    // Он обновляет state, чтобы следующий рендер показал запасной UI.
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    // Здесь можно логировать ошибку (отправлять в Sentry, биллинг или просто в консоль)
    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary поймал критическую ошибку:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Твой кастомный дизайн для сломавшегося кусочка сайта
            return this.props.fallback || (
                <div className="p-4 my-4 bg-red-900/20 border border-red-500/40 rounded-md text-center max-w-md mx-auto">
                    <h3 className="text-red-400 font-bold mb-1 font-serif text-sm">Композиция временно недоступна</h3>
                    <p className="text-xs text-slate-400 mb-3">Этот блок не смог отрендериться из-за технической ошибки.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="text-[11px] uppercase tracking-wider bg-red-500/20 hover:bg-red-500/40 text-red-300 px-3 py-1 rounded transition-all"
                    >
                        Обновить страницу
                    </button>
                </div>
            );
        }

        // Если всё хорошо — просто рендерим то, что внутри
        return this.props.children;
    }
}

export default ErrorBoundary;