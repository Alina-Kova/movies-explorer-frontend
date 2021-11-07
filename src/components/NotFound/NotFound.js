import React from 'react';
import './NotFound.css';
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

export const NotFound = () => {

	// const history = useHistory();

	// React.useEffect(() => {
	// 	props.onIsHidden(false)
	// 	return () => {
	// 		props.onIsHidden(true)
	// 	}
	// }, [props])

	return (
		<div className="error">
			<div className="error__inner">
			<h1 className="error__title">404</h1>
			<p className="error__subtitle">Страница не найдена</p>
			{/* <button className="error__button" onClick={() => history.goBack()}>Назад</button> */}
			<Link className="error__button" to="/">
          Назад
            </Link>
		  </div>
		</div>
	);
}

// import React from "react";
// import { Link } from "react-router-dom";

// export const NotFound = () => {
//   return (
//     <section className="not-found">
//       <div className="not-found__inner">
//         <h3 className="not-found__title">404</h3>
//         <p className="not-found__subtitle">Страница не найдена</p>
//         <Link className="not-found__button" to="/">
//           Назад
//         </Link>
//       </div>
//     </section>
//   );
// }