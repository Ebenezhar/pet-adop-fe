import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React from 'react'

function Home() {
    return (
        <div style={{ backgroundColor: "#EBF9FF" }} className="d-flex flex-column px-5 py-4">
            <div className='d-flex justify-content-around py-5'>
                <div id='info'>
                    <h2>Welcome to the Animal Shelter</h2>
                    <p>Glad that you care for the animals so much. We make sure that you’ll not repent your decision of adopting your favorite pet !!</p>
                    <div class="col">
                        <button style={{ backgroundColor: "#FF6584" }} type="button" class="btn btn-light border border-dark m-2">Adopt</button>
                        <button type="button" class="btn btn-light border border-dark">What all pets do we have ?</button>
                    </div>
                </div>
                <div id='pic'>
                    <Player
                        className='player'
                        background="transparent"
                        autoplay
                        loop
                        src="https://assets7.lottiefiles.com/packages/lf20_8y3kzptg.json"
                        style={{ height: '200px', width: '200px', background: 'transperant' }}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>
            </div>
            <div className='p-2'>
                <h2 className='text-end'>We do take in pets if you can’t take care of them !</h2>
                <p className='text-end'>
                    Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb ebf uewbfiuwefbwefweiuf
                    wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc
                </p>
                <div class="text-end">
                    <button type="button" class="btn btn-light border border-dark">Light</button>

                </div>
            </div>
            <div className='p-2 d-flex justify-content-around'>
                <div>
                    <Player
                        className='player'
                        background="transparent"
                        autoplay
                        loop
                        src="https://assets7.lottiefiles.com/packages/lf20_Q1pZ8v.json"
                        style={{ height: '200px', width: '200px', background: 'transperant' }}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>
                <div className='p-5'>
                    <p>Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb ebf uewbfiuwefbwefweiuf wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes efjebsf beskd</p>
                </div>
            </div>
        </div>
    )
}

export default Home