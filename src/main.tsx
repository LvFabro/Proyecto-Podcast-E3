import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header.tsx'
import ListenAgain from './components/listen-again.tsx'
import QuickPicks from './components/quick-picks.tsx'
import RecommendedAlbums from './components/recommended-albums.tsx'
import SimilarTo from './components/similar-to.tsx'
import PlayBar from './components/play-bar.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <ListenAgain />
    <QuickPicks />
    <RecommendedAlbums />
    <SimilarTo />
    <PlayBar />
  </React.StrictMode>,
)
