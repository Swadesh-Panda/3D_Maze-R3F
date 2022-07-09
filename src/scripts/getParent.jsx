const getParent = (obj) => {
  if (obj.userData.isParent) return obj;
  else if (obj.parent != null) return getParent(obj.parent);
  else return null;
};

export default getParent;
