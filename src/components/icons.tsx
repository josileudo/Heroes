
interface IconProps {
  name: 'home' | 'map' 
  color: string;
}

export function Icons({name, color}: IconProps) {

  switch (name) {
    case 'home':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 21.9999H5C4.73478 21.9999 4.48043 21.8946 4.29289 21.707C4.10536 21.5195 4 21.2651 4 20.9999V11.9999H1L11.327 2.61192C11.5111 2.4444 11.7511 2.35156 12 2.35156C12.2489 2.35156 12.4889 2.4444 12.673 2.61192L23 11.9999H20V20.9999C20 21.2651 19.8946 21.5195 19.7071 21.707C19.5196 21.8946 19.2652 21.9999 19 21.9999ZM6 19.9999H18V10.1569L12 4.70292L6 10.1569V19.9999Z" fill="white"/>
        </svg>
      );

    case 'map':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5ZM12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 5.13 8.13 2 12 2ZM12 4C9.24 4 7 6.24 7 9C7 10 7 12 12 18.71C17 12 17 10 17 9C17 6.24 14.76 4 12 4Z" fill="#F2F2F2"/>
        </svg>
      );
  }
}