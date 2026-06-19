import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaBath, FaBed, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { inmuebleApi } from "../services/api";

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    inmuebleApi.getOne(id)
      .then(setProperty)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="bg-surface-light dark:bg-surface-dark min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-12 animate-pulse">
          <div className="h-80 bg-gray-200 dark:bg-gray-700 rounded-2xl mb-8" />
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="bg-surface-light dark:bg-surface-dark min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-5xl mb-4">🏚️</p>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Propiedad no encontrada.
          </p>
          <button onClick={() => navigate("/properties")} className="btn-primary">
            Volver al listado
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-light dark:bg-surface-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-300 mb-6 transition-colors"
        >
          <FaArrowLeft className="size-4" /> Volver
        </button>

        {/* Imagen principal */}
        <div className="rounded-2xl overflow-hidden h-72 md:h-96 bg-gray-200 dark:bg-gray-800 mb-8">
          {property.images?.[0] && (
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Info */}
        <div className="card p-8 flex flex-col gap-5">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {property.title}
            </h1>
            {property.location && (
              <p className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm mt-2">
                <FaMapMarkerAlt className="size-4 text-brand-400" />
                {property.location}
              </p>
            )}
          </div>

          <p className="text-3xl font-bold text-brand-500 dark:text-brand-300">
            ${property.price?.toLocaleString()}
          </p>

          {(property.bath != null || property.bed != null || property.area) && (
            <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400
                            py-4 border-y border-gray-100 dark:border-gray-700">
              {property.bath != null && (
                <span className="flex items-center gap-2">
                  <FaBath className="size-5 text-brand-400" /> {property.bath} baños
                </span>
              )}
              {property.bed != null && (
                <span className="flex items-center gap-2">
                  <FaBed className="size-5 text-brand-400" /> {property.bed} habitaciones
                </span>
              )}
              {property.area && (
                <span className="flex items-center gap-2">
                  <MdSpaceDashboard className="size-5 text-brand-400" /> {property.area} m²
                </span>
              )}
            </div>
          )}

          {property.description && (
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {property.description}
            </p>
          )}

          <button className="btn-primary self-start">
            Solicitar visita
          </button>
        </div>
      </div>
    </div>
  );
}
