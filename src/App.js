import Header from './components/Header';
import Book from './components/Book';
import Footer from './components/Footer';

function App() {

  const book = [{
    title: 'Diary of a Teenage Stud',
    image: 'https://images-na.ssl-images-amazon.com/images/I/417eNHCM5fL.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor sem, ullamcorper a volutpat vel, porta sit amet tortor. Fusce quis felis mi. Donec dapibus erat tincidunt, luctus quam sit amet, cursus nisi. Maecenas pretium nisl nec orci commodo, sit amet volutpat tellus varius. Vivamus convallis id ex non accumsan.'
  },
  {
    title: 'Midnight',
    image: 'http://prodimage.images-bn.com/pimages/9781416545361_p0_v4_s1200x630.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor sem, ullamcorper a volutpat vel, porta sit amet tortor. Fusce quis felis mi. Donec dapibus erat tincidunt, luctus quam sit amet, cursus nisi. Maecenas pretium nisl nec orci commodo, sit amet volutpat tellus varius. Vivamus convallis id ex non accumsan.'
  },
  {
    title: 'The Quran',
    image: 'https://zawiyafellowship.com/wp/wp-content/uploads/2019/06/Quran-The-Sacred-Message-Cover.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor sem, ullamcorper a volutpat vel, porta sit amet tortor. Fusce quis felis mi. Donec dapibus erat tincidunt, luctus quam sit amet, cursus nisi. Maecenas pretium nisl nec orci commodo, sit amet volutpat tellus varius. Vivamus convallis id ex non accumsan.'
  }
  ];

  return (
    <>
      <Header />
      <div className="container">
        {/* Book Component Here */}
        <Book book={book} />
      </div>
      <Footer />
    </>
  );
}

export default App;