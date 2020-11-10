const mapFunctionsToProps = preloadPropsFn => Component => props  => <Component {...preloadPropsFn(props)} />

export default mapFunctionsToProps