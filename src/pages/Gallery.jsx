import React from 'react'
import Common from './Common'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Gallery() {
  return (
    <>
      <Header />
      <Common />
      <div className='d-flex justify-content-center align-items-center'>
        <div className="gallery">
          <img src="https://static.toiimg.com/thumb/94357207/Sree-Padmanabhaswamy-temple.jpg?width=636&height=358&resize=4" alt="no image" />
          <img src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/15/7fdb31302a889f5f87602d69817c6d52_1000x1000.png" alt="no image" />
          <img src="https://assets.cntraveller.in/photos/661912266756424733f3ee52/3:2/w_5073,h_3382,c_limit/GettyImages-1299171226.jpg" alt="no image" />
          <img src="https://s7ap1.scene7.com/is/image/incredibleindia/padmanabha-swamy-temple-thiruvananthapuram-kerala-1-attr-hero?qlt=82&ts=1727367640712" alt="no image" />
        </div>
        <div className="gallery">
          <img src="https://www.indica.today/wp-content/uploads/2021/03/Sun-Down-Sequence-1.jpg" alt="no image" />
          <img src="https://pbs.twimg.com/media/FObgL_8aUAMcTTA.jpg:large" alt="no image" />
          <img src="https://images.hindustantimes.com/img/2022/06/26/1600x900/4fe80236-f579-11ec-91b5-54ec88d6cb87_1656269195888.jpg" alt="no image" />
          <img src="https://img.onmanorama.com/content/dam/mm/en/travel/essential-kerala/images/2020/7/14/sree-padmanabhaswamy-temple.jpg?crop=fc&w=575&h=575" alt="no image" />
        </div>
        <div className="gallery">
          <img src="https://tfipost.com/wp-content/uploads/2023/01/Padmanabhaswamy-Temple-night-view.jpg" alt="no image" />
          <img src="https://www.bizzbuzz.news/h-upload/2024/05/26/1908180-padmanabha-swamy-temple.webp" alt="no image" />
          <img src="https://c8.alamy.com/comp/2ARXE71/sree-padmanabhaswamy-temple-and-padmatheertham-pond-during-lakshadeepam-ceremony-thiruvananthapuramkeralaindia-2ARXE71.jpg" alt="no image" />
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIIiWoBytS1nq6zla8SSdQn44cm_1Z7GUETdkstfisea4U3YxVIsJht5snVGJKZgEOsaIfZOnrGWrYQIjlWQHuCEkQeMbdb651iqq5DvJZZWnI-WO-Vn6ZK0UZYkUJfx1STHRhcJvVqLhb/s1300/lakshadeepam-ceremony-lighting-of-one-lakh-oil-lamps-at-the-last-day-of-murajapam-ritual-at-sree-padmanabhaswamy-templethiruvananthapuramkerala-2ANAA3R.jpg" alt="no image" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Gallery