import React from 'react';
import './MusicIcons.css';
import nusratImage from '../assets/nusrat-fateh-ali-khan.png'; 
import abidaImage from '../assets/abida-parveen.png';
import zarsangaImage from '../assets/zarsanga.png';
import naziaImage from '../assets/nazia-hassan.png';
import shaziaImage from '../assets/shazia-khushk.png';
import atifImage from '../assets/atif-aslam.png';
import attaullahImage from '../assets/attaullah-esakhelvi.png';
import akhtarImage from '../assets/akhtar-chanal-zahri.png';
const ARTISTS_DATA = [
  {
    id: 'nusrat-fateh-ali-khan',
    name: 'Nusrat Fateh Ali Khan',
    years: '1948–1997',
    bio: 'He was a legendary Pakistani vocalist and musician, primarily a singer of Qawwali, a form of Sufi Islamic devotional music. He possessed an extraordinary range of vocal abilities and could perform at a high level of intensity for several hours.',
    imageUrl: nusratImage,
    imageAlt: 'Nusrat Fateh Ali Khan',
  },
  {
    id: 'abida-parveen',
    name: 'Abida Parveen',
    years: '1954–Present',
    bio: "Abida Parveen, is a Pakistani Sufi Muslim singer, composer and musician. Her singing and music has earned her many accolades, and she has been dubbed as the 'Queen of Sufi music'.",
    imageUrl: abidaImage,
    imageAlt: 'Abida Parveen',
  },
  {
    id: 'zarsanga',
    name: 'Zarsanga',
    years: '1946–Present',
    bio: "Zarsanga is a famous pushto singer, widely known as 'The Queen of Pushton Folklore'. She has enthralled thousands of Pakhtuns and local people with her voice.",
    imageUrl: zarsangaImage,
    imageAlt: 'Zarsanga',
    isContainerStyle: true,
  },
  {
    id: 'nazia-hassan',
    name: 'Nazia Hassan',
    years: '1965–2000',
    bio: "Nazia Hassan was a Pakistani pop singer-songwriter, She enjoyed widespread popularity across South and Southeast Asia and has been called the 'Queen of Pop' in South Asia.",
    imageUrl: naziaImage,
    imageAlt: 'Nazia Hassan',
    isContainerStyle: true,
  },
  {
    id: 'shazia-khusk',
    name: 'Shazia Khusk',
    years: '1970–Present',
    bio: "Shazia Khushk is a Pakistani Former Folk Singer. She has sung more than 500 songs on sufism-folk music in multiple languages. She performed in 45 countries of the world.",
    imageUrl: shaziaImage,
    imageAlt: 'Shazia Khusk',
    isContainerStyle: true,
  },
  {
    id: 'atif-aslam',
    name: 'Atif Aslam',
    years: '1983–Present',
    bio: "A Pakistani pop singer songwriter, has recorded numerous chart-topping songs and known for his vocal belting technique also awarded with a Medal of Distinction in 2008.",
    imageUrl: atifImage,
    imageAlt: 'Atif Aslam',
    isContainerStyle: true,
  },
  {
    id: 'attaullah-khan-essakhelvi',
    name: 'Attaullah Khan Essakhelvi',
    years: '1951–Present',
    bio: "He is a Mianwali-born vocalist, considered as a folk-icon and most popular singer in the history of Pakistan. Esakhelvi reigned supreme and unchallanged in the cultured music salons of elites.",
    imageUrl: attaullahImage,
    imageAlt: 'Attaullah Khan Essakhelvi',
    isContainerStyle: true,
  },
  {
    id: 'akhtar-chanal-zahri',
    name: 'Akhtar Chanal Zahri',
    years: '1954–Present',
    bio: "He is a famous Balochi Folk singer, also a form of Sufi devotional music. He received 'Pride of Performance Award' for extraordinary range of vocal abilities.",
    imageUrl: akhtarImage,
    imageAlt: 'Akhtar Chanal Zahri',
    isContainerStyle: true,
  },
];

export const MusicIcons = () => {
  return (
    <div className="music-icons-container" id="music-icons-section">
      <header className="music-icons-header" id="music-icons-header">
        <h1 className="music-icons-title" id="music-icons-title">
          Music Icons in Pakistan
        </h1>
        <p className="music-icons-description" id="music-icons-description">
          Music of Pakistan includes diverse elements ranging from music from various
          parts of South Asia as well as Central Asian, Middle Eastern, and modern-day
          Western popular music influences. With these influences, a distinctive Pakistani
          sound has emerged.
        </p>
      </header>

      <main className="music-icons-card" id="music-icons-card">
        {ARTISTS_DATA.map((artist, index) => (
          <React.Fragment key={artist.id}>
            <section className="artist-item" id={`artist-item-${artist.id}`}>
              <div
                className={`artist-image-wrapper ${
                  artist.isContainerStyle ? 'container-style' : ''
                }`}
                id={`artist-img-wrapper-${artist.id}`}
              >
                <img
                  src={artist.imageUrl}
                  alt={artist.imageAlt}
                  className="artist-image"
                  id={`artist-img-${artist.id}`}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"><rect width="140" height="140" fill="%230b8457"/><text x="50%" y="54%" font-family="sans-serif" font-weight="bold" font-size="28" fill="%23ffffff" text-anchor="middle" dominant-baseline="middle">${encodeURIComponent(
                      artist.name.charAt(0)
                    )}</text></svg>`;
                  }}
                />
              </div>

              <div className="artist-info" id={`artist-info-${artist.id}`}>
                <h2 className="artist-name" id={`artist-name-${artist.id}`}>
                  {artist.name}
                </h2>
                <div className="artist-years" id={`artist-years-${artist.id}`}>
                  {artist.years}
                </div>
                <p className="artist-bio" id={`artist-bio-${artist.id}`}>
                  {artist.bio}
                </p>
              </div>
            </section>

            {index < ARTISTS_DATA.length - 1 && (
              <hr className="artist-divider" id={`artist-divider-${artist.id}`} />
            )}
          </React.Fragment>
        ))}
      </main>
    </div>
  );
};

export default MusicIcons;