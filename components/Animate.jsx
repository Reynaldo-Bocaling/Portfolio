export const menuVariant = {
    initial: {
        scaleY: 0
    },
    animate: {
        scaleY: 1,
        transition: {
            duration: 0.3,
            ease:[0.12, 0,0.39,0]
        }
    },
    exit: {
        scaleY:0,
        transition: {
            duration: 0.3,
            ease:[0.22, 1,0.36,1]
        }
    }
}

export const mobileLinkVariant = {
    initial: {
        y: "30vh",
        transition: {
            duration:0.5
        }
    },
    open: {
        y:0,
        transition: {
            duration:0.7
        }
    }
}

export const containerVariants = {
    initial: {
        transition: {
            staggerChildren: 0.07
        }
    },
    open: {
        // y:0,
        transition: {
            staggerChildren: 0.07
        }
    }
}