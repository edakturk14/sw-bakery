import React, { useCallback, useEffect, useMemo, useState, CSSProperties, ReactNode } from 'react';
import { useConnect } from 'wagmi';
import { CoinbaseWalletLogo } from './CoinbaseWalletLogo';

const GRADIENT_BORDER_WIDTH = 2;

const buttonStyles: CSSProperties = {
    background: 'transparent',
    border: '1px solid transparent',
    boxSizing: 'border-box',
};

const contentWrapperStyle: CSSProperties = {
    position: 'relative',
};

interface GradientProps {
    children: ReactNode;
    style?: CSSProperties;
    isAnimationDisabled?: boolean;
}

function Gradient({ children, style, isAnimationDisabled = false }: GradientProps) {
    const [isAnimating, setIsAnimating] = useState(false);
    const gradientStyle = useMemo(() => {
        const rotate = isAnimating ? '720deg' : '0deg';
        return {
            transform: `rotate(${rotate})`,
            transition: isAnimating
                ? 'transform 2s cubic-bezier(0.27, 0, 0.24, 0.99)'
                : 'none',
            ...style,
        };
    }, [isAnimating, style]);

    const handleMouseEnter = useCallback(() => {
        if (isAnimationDisabled || isAnimating) return;
        setIsAnimating(true);
    }, [isAnimationDisabled, isAnimating]);

    useEffect(() => {
        if (!isAnimating) return;
        const animationTimeout = setTimeout(() => {
            setIsAnimating(false);
        }, 2000);
        return () => {
            clearTimeout(animationTimeout);
        };
    }, [isAnimating]);

    return (
        <div style={contentWrapperStyle} onMouseEnter={handleMouseEnter}>
            <div className="gradient-background" style={gradientStyle} />
            {children}
        </div>
    );
}

interface BlackCreateWalletButtonProps {
    height?: number;
    width?: number;
}

export function BlackCreateWalletButton({ height = 50, width = 200 }: BlackCreateWalletButtonProps) {
    const { connectors, connect } = useConnect();

    const minButtonHeight = 48;
    const minButtonWidth = 200;
    const buttonHeight = Math.max(minButtonHeight, height);
    const buttonWidth = Math.max(minButtonWidth, width);
    const gradientDiameter = Math.max(buttonHeight, buttonWidth);
    const styles = useMemo(
        () => ({
            gradientContainer: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                borderRadius: buttonHeight / 2,
                height: buttonHeight,
                width: buttonWidth,
                boxSizing: 'border-box',
                overflow: 'hidden',
            } as CSSProperties,
            gradient: {
                background:
                    'conic-gradient(from 180deg, #45E1E5 0deg, #0052FF 86.4deg, #B82EA4 165.6deg, #FF9533 255.6deg, #7FD057 320.4deg, #45E1E5 360deg)',
                position: 'absolute',
                top: -buttonHeight - GRADIENT_BORDER_WIDTH,
                left: -GRADIENT_BORDER_WIDTH,
                width: gradientDiameter,
                height: gradientDiameter,
            } as CSSProperties,
            buttonBody: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box',
                backgroundColor: '#000000',
                height: buttonHeight - GRADIENT_BORDER_WIDTH * 2,
                width: buttonWidth - GRADIENT_BORDER_WIDTH * 2,
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
                fontSize: 18,
                borderRadius: buttonHeight / 2,
                position: 'relative',
                paddingRight: 10,
                color: 'white',  // Added to make text white
            } as CSSProperties,
            logoWrapper: {
                paddingRight: 4,
            } as CSSProperties,
        }),
        [buttonHeight, buttonWidth, gradientDiameter]
    );

    const createWallet = useCallback(() => {
        const coinbaseWalletConnector = connectors.find(
            (connector) => connector.id === 'coinbaseWalletSDK'
        );
        if (coinbaseWalletConnector) {
            connect({ connector: coinbaseWalletConnector });
        }
    }, [connectors, connect]);

    return (
        <button style={buttonStyles} onClick={createWallet}>
            <div style={styles.gradientContainer}>
                <Gradient style={styles.gradient}>
                    <div style={styles.buttonBody}>
                        <div style={styles.logoWrapper}>
                            <CoinbaseWalletLogo />
                        </div>
                        Create Wallet
                    </div>
                </Gradient>
            </div>
        </button>
    );
}

interface ConnectedWalletButtonProps {
    address: string;
    height?: number;
    width?: number;
    onDisconnect: () => void;
}

export function ConnectedWalletButton({ address, height = 50, width = 200, onDisconnect }: ConnectedWalletButtonProps) {
    const minButtonHeight = 48;
    const minButtonWidth = 200;
    const buttonHeight = Math.max(minButtonHeight, height);
    const buttonWidth = Math.max(minButtonWidth, width);
    const gradientDiameter = Math.max(buttonHeight, buttonWidth);
    const styles = useMemo(
        () => ({
            gradientContainer: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                borderRadius: buttonHeight / 2,
                height: buttonHeight,
                width: buttonWidth,
                boxSizing: 'border-box',
                overflow: 'hidden',
            } as CSSProperties,
            gradient: {
                background:
                    'conic-gradient(from 180deg, #45E1E5 0deg, #0052FF 86.4deg, #B82EA4 165.6deg, #FF9533 255.6deg, #7FD057 320.4deg, #45E1E5 360deg)',
                position: 'absolute',
                top: -buttonHeight - GRADIENT_BORDER_WIDTH,
                left: -GRADIENT_BORDER_WIDTH,
                width: gradientDiameter,
                height: gradientDiameter,
            } as CSSProperties,
            buttonBody: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box',
                backgroundColor: '#000000',
                height: buttonHeight - GRADIENT_BORDER_WIDTH * 2,
                width: buttonWidth - GRADIENT_BORDER_WIDTH * 2,
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
                fontSize: 16,
                borderRadius: buttonHeight / 2,
                position: 'relative',
                paddingRight: 10,
                color: 'white',
            } as CSSProperties,
        }),
        [buttonHeight, buttonWidth, gradientDiameter]
    );

    return (
        <button style={buttonStyles} onClick={onDisconnect}>
            <div style={styles.gradientContainer}>
                <Gradient style={styles.gradient}>
                    <div style={styles.buttonBody}>
                        Connected: {address.slice(0, 3)}..{address.slice(-3)}
                    </div>
                </Gradient>
            </div>
        </button>
    );
}
