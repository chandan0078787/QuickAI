import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import DashBoard from './pages/DashBoard'
import WriteArticle from './pages/WriteArticle'
import BlogTitle from './pages/BlogTitle'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObjects from './pages/RemoveObjects'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/Community'
import GenerateImages from './pages/GenerateImages'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ai' element={<Layout/>}>
          <Route index element={<DashBoard/>}/>
          <Route path='write-article' element={<WriteArticle/>}/>
          <Route path='blog-titles' element={<BlogTitle/>}/>
          <Route path='generate-images' element={<GenerateImages/>}/>
          <Route path='remove-background' element={<RemoveBackground/>}/>
          <Route path='remove-object' element={<RemoveObjects/>}/>
          <Route path='review-resume' element={<ReviewResume/>}/>
          <Route path='community' element={<Community/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
