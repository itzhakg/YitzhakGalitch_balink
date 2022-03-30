export namespace Styled {
    export enum MediaBreakPoints {
        phone = 0,
        tabletPortrait= 1,
        tableLandscape = 2,
        bigDesktop = 3
    }
    
    const setBreakPoint = (breakPoint: MediaBreakPoints) => {
        switch (breakPoint) {
            case Styled.MediaBreakPoints.phone:
                return 'max-width: 37.5em';
            case Styled.MediaBreakPoints.tabletPortrait:
                return 'max-width: 56.25em';
            case Styled.MediaBreakPoints.tableLandscape:
                return 'max-width: 75em';
            case Styled.MediaBreakPoints.bigDesktop:
                return 'max-width: 112.5em';
        }
    }
    
    export const mediaManager = (breakPoint: MediaBreakPoints, cssCode: string) => {
        return `
        @media (${setBreakPoint(breakPoint)}) {
            ${cssCode}
        }
        `
      
    }
}
