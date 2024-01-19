import '@styles/globals.css';
import Provider from '@/components/Provider';
import { ReduxProvider } from '@redux/provider';
import Nav from '@/components/Nav';
import Footer from '@components/Footer';

export const metadata = {
    title: 'Pacel Labs Auth',
    description: 'Basic login and logout functionality',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <ReduxProvider>
          <Provider>
              <div className="main">
                  <div className='gradient' />
              </div>

              <main className="app sm:px-16 px-6">
                {children}
              </main>
              <Footer />
          </Provider>
        </ReduxProvider>
      </body>
    </html>
  )
}

export default RootLayout;