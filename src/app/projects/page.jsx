import Link from "next/link";

export default function Project() {
    return(
        <>
            {/* Project */}
            <section id='project'>
                <div className="container pt-4 mt-20 text-center text-white">
                    <div className="mb-2">
                        <h1 className='text-2xl font-semibold text-center'>Projects</h1>
                    </div>
                    <div className='w-16 px-4 mx-auto mb-10 border-t-2 border-white'></div>

                    <div className="flex flex-wrap justify-center gap-4 mb-10 text-left md:grid md:grid-cols-4">
                        <Link href="/projects/project-1" className="card">
                            <h5 className="card-title">Sistem Pakar</h5>
                            <p className="card-content">Sistem pakar is a web for disease diagnosis</p>
                        </Link>
                        <Link href="/projects/project-2" className="card">
                            <h5 className="card-title">Blog</h5>
                            <p className="card-content">Blog is a tutorial project from the WPU channel</p>
                        </Link>
                        <Link href="/projects/project-3" className="card">
                            <h5 className="card-title">Band Lirik</h5>
                            <p className="card-content">Band Lirik is a tutorial project from the Parsinta channel </p>
                        </Link>
                        <Link href="/projects/project-4" className="card">
                            <h5 className="card-title">Anime List</h5>
                            <p className="card-content">Anime List is a tutorial project from the Dea Afrizal channel</p>
                        </Link>
                    </div>
                    
                </div>
            </section>
        </>
    )
}