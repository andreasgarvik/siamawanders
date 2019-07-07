import React from 'react'
import { Link } from 'react-router-dom'
import Truncate from 'react-truncate'

const RecentBlogPost = ({ id, blogpost }) => {
	return (
		<div className='card z-depth-0' style={{ marginTop: '0%' }}>
			<div className='card-content'>
				<img
					className='responsive-img'
					src={blogpost.imageRefs[0]}
					alt={blogpost.imageNames[0]}
				/>
				<span className='card-title'>{blogpost.title}</span>
				<Truncate
					lines={3}
					ellipsis={
						<span>
							...{' '}
							<Link
								className='btn grey'
								style={{ marginTop: '2%' }}
								to={`/blogposts/${id}`}
							>
								Read more
							</Link>
						</span>
					}
				>
					{blogpost.content.split('\n').map((line, i, arr) => {
						line = <span key={i}>{line}</span>

						if (i === arr.length - 1) {
							return line
						} else {
							return [line, <br key={i + 'br'} />]
						}
					})}
				</Truncate>
				{blogpost.imageRefs[1] ? (
					<img className='responsive-img' src={blogpost.imageRefs[1]} alt='' />
				) : null}
			</div>
		</div>
	)
}

export default RecentBlogPost
