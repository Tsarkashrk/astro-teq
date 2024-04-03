import Card from '@/components/Card/Card'
import Title from '@/components/Title/Title'
import data from '@/lib/data'

const Home = () => {
  return (
    <section className="home">
      <Title title="Главная" />
      <div className="home__products">
        {data.products.map((product) => (
          <Card key={product.slug} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Home
