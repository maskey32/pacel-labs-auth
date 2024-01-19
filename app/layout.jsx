import '@styles/globals.css';
import Provider from '@/components/Provider';
import Nav from '@/components/Nav';

export const metadata = {
    title: 'Pacel Labs Auth',
    description: 'Basic login and logout functionality'
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
            <div className="main">
                <div className='gradient' />
            </div>

            <main className="app sm:px-16 px-6">
                <Nav />
                {children}
            </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;