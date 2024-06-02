const AppLayout = (WrappedComponent) => {
  const ComponentWithLayout = (props) => {
    return (
      <div>
        <div>Header</div>
        <WrappedComponent {...props} />
        <div>Footer</div>
      </div>
    );
  };

  ComponentWithLayout.displayName = `AppLayout(${getDisplayName(WrappedComponent)})`;

  return ComponentWithLayout;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default AppLayout;
