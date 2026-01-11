import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-black rounded-full" />
            <span className="font-bold">至简金融</span>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Minimal Finance. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-black transition-colors"
              aria-label="WeChat"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-5.523 3.259-6.834C11.205 8.62 10.041 2.188 8.691 2.188zm-2.488 5.93c-.39 0-.705-.32-.705-.713 0-.392.315-.712.705-.712s.705.32.705.712c0 .393-.315.713-.705.713zm4.097 0c-.39 0-.705-.32-.705-.713 0-.392.315-.712.705-.712s.705.32.705.712c0 .393-.315.713-.705.713zM23.998 15.359c0-3.273-3.404-5.932-7.602-5.932-4.197 0-7.601 2.659-7.601 5.932 0 3.274 3.404 5.932 7.601 5.932.654 0 1.29-.071 1.893-.201a.859.859 0 0 1 .716.098l1.586.927a.325.325 0 0 0 .168.054c.16 0 .289-.132.289-.295a.6.6 0 0 0-.048-.213l-.325-1.233a.587.587 0 0 1 .213-.665c1.832-1.347 3.002-3.338 3.002-5.55v-.003zm-10.26-.537c-.39 0-.705-.32-.705-.713 0-.392.315-.712.705-.712s.705.32.705.712c0 .393-.315.713-.705.713zm4.097 0c-.39 0-.705-.32-.705-.713 0-.392.315-.712.705-.712s.705.32.705.712c0 .393-.315.713-.705.713z"/>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-black transition-colors"
              aria-label="Weibo"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.31 14.46c-.284 1.002.26 1.916 1.215 2.04.955.125 1.92-.536 2.206-1.538.286-1.004-.257-1.916-1.213-2.042-.954-.125-1.922.537-2.208 1.54zm1.636-3.402c-.12.038-.258.037-.377.004-.118-.033-.204-.104-.24-.2-.037-.099-.024-.209.024-.3.047-.09.138-.163.248-.192.11-.028.236-.02.347.018.11.04.19.118.224.22.034.1.018.216-.031.305-.048.088-.148.153-.267.182z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
