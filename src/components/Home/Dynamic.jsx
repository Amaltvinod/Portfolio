import React, { useEffect, useState } from "react"
import { Wrapper } from "./DynamicStyles"
export const Dynamic = () => {
    const words = ["Front-end Developer", "Back-end Developer", "Competitive Coder"]
    const [wordIndex, setWordIndex] = useState(0)
    const [letterIndex, setLetterIndex] = useState(0)
    const [forward, setForward] = useState(true)
    const [animationComplete, setAnimationComplete] = useState(false)


    useEffect(() => {
        const currentWord = words[wordIndex]
        const wordLength = currentWord.length
        if (animationComplete) {
            setWordIndex((wordIndex + 1) % words.length)
            setLetterIndex(0)
            setAnimationComplete(false)
            setForward(true)
        } else {
            const letterInterval = setInterval(() => {
                if (forward) {
                    setLetterIndex((index) => index + 1)
                    if (letterIndex === wordLength) {
                        setForward(false)
                    }
                } else {
                    setLetterIndex((index) => index - 1)
                    if (letterIndex === 0) {
                        setForward(true)
                        setAnimationComplete(true)
                    }
                }
            }, 100)

            return () => clearInterval(letterInterval)
        }
    }, [wordIndex, words, letterIndex, forward, animationComplete])

  

    const currentWord = words[wordIndex]
    const currentLetters = currentWord.slice(0, letterIndex)

    return (
        <Wrapper>
            <h1>Amal T Vinod</h1>
            <h5>
                {currentLetters}
               <span className="cursor">|</span>
            </h5>
        </Wrapper>
    )
}
