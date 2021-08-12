import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p><b>Cientista da computação em formação</b> e 99% síndrome de impostor.</p>
        
        <p>Tenho particular interesse pelas áreas de 🤖<b>Inteligência Artificial</b>, 👨‍🔬<b>Computação Científica</b>, 🌐<b>Ciência de Redes</b> e <b>Redes Complexas</b>.</p>
      
        <p>Às vezes também <b>faço uns sites</b> e <i>tento</i> fazer <b>divulgação científica</b>.</p>

        <p><b>Este site está em construção.</b> <i>Por enquanto</i>, você pode me encontrar através das seguintes plataformas:</p>

        <ul className={utilStyles.list}>
          <li className={utilStyles.listItemHorizontal}>
            <Link href="https://twitter.com/csamuelssm">
              <a>
                Twitter
              </a>
            </Link>
          </li>
          <li className={utilStyles.listItemHorizontal}>
            <Link href="https://github.com/csamuelsm">
              <a>
                Github
              </a>
            </Link>
          </li>
          <li className={utilStyles.listItemHorizontal}>
            <Link href="http://lattes.cnpq.br/3942868279619594">
              <a>
                Lattes
              </a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

/*export async function getStaticProps() {
  
}*/