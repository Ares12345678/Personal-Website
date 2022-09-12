import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';


export default function Home() {
  const { data: _projects } = swr('/api/projects');
  const projects = _projects ? _projects : null;

  return (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">Stoklarımız</p>
        <p className="text-xl text-white/50 font-normal text-center mb-5">Eğer isternesiniz sipariş verebilirsiniz</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}
