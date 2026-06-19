import { useNavigate } from "react-router-dom";
import { FaBath, FaBed } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function PropertyCard({ property }) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/properties/${property.id}`)}
      className="card overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer group"
    >
      {/* Imagen */}
      <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
        {property.images ? (
          <img
            src={property.images}
            alt={property.name || "Propiedad"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            Sin imagen
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col gap-2">
        {property.address && (
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <FaMapMarkerAlt className="size-3 text-brand-400" />
            {property.address}
          </p>
        )}

        <h3 className="font-semibold text-base text-gray-900 dark:text-white line-clamp-1">
          {property.name}
        </h3>

        {property.price && (
          <p className="text-brand-500 dark:text-brand-300 font-bold text-lg">
            {property.price}
          </p>
        )}

        {property.about && (
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            {property.about}
          </p>
        )}

        {(property.bed || property.bath || property.area) && (
          <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-700 mt-1">
            {property.bath && (
              <span className="flex items-center gap-1.5">
                <FaBath className="size-4 text-brand-400" /> {property.bath}
              </span>
            )}
            {property.bed && (
              <span className="flex items-center gap-1.5">
                <FaBed className="size-4 text-brand-400" /> {property.bed}
              </span>
            )}
            {property.area && (
              <span className="flex items-center gap-1.5">
                <MdSpaceDashboard className="size-4 text-brand-400" /> {property.area}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
