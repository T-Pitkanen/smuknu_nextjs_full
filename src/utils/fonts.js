import { Oswald, Quicksand } from 'next/font/google'

export const oswaldFont = Oswald({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});


export const quickFont = Quicksand({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});