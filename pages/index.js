import Image from 'next/image';


function Home() {
    return <div>Dra Vitória Santos
        <Image 
        src="/files/LOGOTIPO.png"
        alt="logo consult[orio"
        width={300}
        height={400}
        style={{ borderRadius: '1rem' }}
        />

    </div>
}

export default Home;