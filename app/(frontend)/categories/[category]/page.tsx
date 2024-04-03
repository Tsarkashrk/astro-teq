import Card from '@/components/Card/Card';
import data from '@/lib/data';

type CategoryProps = {
  params: {category: string}
}

const Category = ({ params }: CategoryProps) => {
  const filteredProducts = data.products.filter((product) => product.category === params.category);

  return (
    <section className="category">
      {filteredProducts.map((product) => (
        <Card key={product.slug} product={product} />
      ))}
    </section>
  );
};

export default Category;

