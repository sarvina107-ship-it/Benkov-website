import { motion } from 'framer-motion';

// Определяем пресеты для анимации
const pageVariants = {
    initial: {
        opacity: 0,
        y: 10, // Страница изначально чуть опущена вниз
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4, // Длительность анимации в секундах
            ease: [0.25, 1, 0.5, 1], // Плавный "premium" кастомный кубический безье
        },
    },
    exit: {
        opacity: 0,
        y: -10, // При уходе страница плавно улетает чуть вверх
        transition: {
            duration: 0.3,
        },
    },
};

const PageWrapper = ({ children }) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full" // Убрал min-h-screen
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;