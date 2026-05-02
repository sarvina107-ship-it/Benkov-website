import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isBlocked, setIsBlocked] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0); // Оставшееся время в секундах
    const navigate = useNavigate();

    const MAX_ATTEMPTS = 3;
    const BLOCK_TIME_MS = 60 * 60 * 1000; // 1 час в миллисекундах

    // Функция для форматирования секунд в формат ММ:СС
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins} мин. ${secs < 10 ? '0' : ''}${secs} сек.`;
    };

    // 1. Проверка блокировки при загрузке и запуск таймера
    useEffect(() => {
        const checkBlock = () => {
            const blockedUntil = localStorage.getItem('blockedUntil');
            if (blockedUntil) {
                const now = Date.now();
                const remaining = Math.ceil((blockedUntil - now) / 1000);

                if (remaining > 0) {
                    setIsBlocked(true);
                    setTimeLeft(remaining);
                } else {
                    // Время вышло — снимаем блок
                    setIsBlocked(false);
                    localStorage.removeItem('blockedUntil');
                    localStorage.setItem('loginAttempts', '0');
                }
            }
        };

        checkBlock();
        const interval = setInterval(checkBlock, 1000); // Обновляем таймер каждую секунду
        return () => clearInterval(interval);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        if (isBlocked) return;

        // Берем данные из окружения (или ставим свои)
        const adminUser = import.meta.env.VITE_ADMIN_USERNAME || 'admin';
        const adminPass = import.meta.env.VITE_ADMIN_PASSWORD;

        if (login === adminUser && password === adminPass) {
            // УСПЕХ
            localStorage.setItem('adminToken', 'secret-key-777');
            localStorage.setItem('loginAttempts', '0');
            localStorage.removeItem('blockedUntil');
            navigate('/admin');
        } else {
            // ОШИБКА
            let attempts = parseInt(localStorage.getItem('loginAttempts') || '0') + 1;
            localStorage.setItem('loginAttempts', attempts.toString());

            if (attempts >= MAX_ATTEMPTS) {
                const blockUntil = Date.now() + BLOCK_TIME_MS;
                localStorage.setItem('blockedUntil', blockUntil.toString());
                setIsBlocked(true);
                setTimeLeft(BLOCK_TIME_MS / 1000);
                alert('Доступ заблокирован на 1 час из-за подозрительной активности!');
            } else {
                alert(`Неверные данные! Осталось попыток: ${MAX_ATTEMPTS - attempts}`);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0E1A2B] px-4">
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">
                <div className="mb-8">
                    <div className="w-20 h-20 bg-[#F4F6F9] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-[#0E1A2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-[#0E1A2B]">Панель управления</h1>
                    <p className="text-gray-500 text-sm mt-2">Введите данные для входа в систему</p>
                </div>

                {isBlocked ? (
                    <div className="p-6 bg-red-50 text-red-600 rounded-2xl border border-red-100 animate-pulse">
                        <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="font-bold text-lg">Вход заблокирован</p>
                        <p className="text-sm mt-1">Слишком много неудачных попыток.</p>
                        <div className="mt-4 py-2 px-4 bg-white rounded-xl font-mono font-bold shadow-sm">
                            {formatTime(timeLeft)}
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Логин"
                                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#D4A259] focus:bg-white transition-all shadow-sm"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Пароль"
                                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#D4A259] focus:bg-white transition-all shadow-sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-[#0E1A2B] text-white rounded-2xl font-bold hover:bg-[#D4A259] hover:shadow-[#D4A259]/20 transition-all shadow-lg active:scale-95"
                        >
                            Войти в систему
                        </button>

                        <p className="text-[10px] text-gray-400 uppercase tracking-widest pt-4">
                            Protected by Railway Firewall
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;