import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBath, FaBed, FaShareAlt, FaHeart, FaPlus, FaMapMarkerAlt,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { inmuebleApi } from "../services/api";

function SkeletonCard() {
  return (
    <div className="card overflow-hidden animate-pulse">
      <div className="h-52 bg-slate-200 dark:bg-slate-700" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/3" />
      </div>
    </div>
  );
}

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const locationHook = useLocation();

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams(locationHook.search);
        const data = await inmuebleApi.getAll(params.toString());
        setProperties(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error cargando propiedades:", err);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, [locationHook.search]);

  return (
    <div className="bg-surface-light dark:bg-surface-dark min-h-screen">
      <section
        id="properties"
        className="container-page py-16"
      >
        <div className="flex flex-col gap-1.5 mb-10">
          <p className="section-label">Propiedades</p>
          <h1 className="section-title">Explora los inmuebles disponibles</h1>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : properties.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No se encontraron propiedades con esos filtros.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((item) => (
              <Link
                key={item._id || item.id}
                to={`/properties/${item._id || item.id}`}
                className="card card-hover overflow-hidden group block"
              >
                {/* Imagen */}
                <div
                  className="relative h-52 bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: `url(${item.images?.[0]})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-brand-600 text-white text-xs font-semibold rounded-md">
                      {item.type || "Inmueble"}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    <FaMapMarkerAlt className="size-3 text-white/80" />
                    <span className="text-white text-xs">{item.address}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-2">
                  <h2 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-1">
                    {item.title}
                  </h2>
                  <p className="text-brand-600 dark:text-brand-400 font-bold text-xl">
                    ${item.price?.toLocaleString()}
                  </p>
                  {item.about && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                      {item.about}
                    </p>
                  )}

                  {/* Detalles */}
                  <div className="flex gap-4 text-xs text-slate-500 dark:text-slate-400 pt-3
                                  border-t border-slate-100 dark:border-slate-700 mt-1">
                    {item.bath != null && (
                      <span className="flex items-center gap-1.5">
                        <FaBath className="size-3.5 text-brand-500 dark:text-brand-400" /> {item.bath}
                      </span>
                    )}
                    {item.bed != null && (
                      <span className="flex items-center gap-1.5">
                        <FaBed className="size-3.5 text-brand-500 dark:text-brand-400" /> {item.bed}
                      </span>
                    )}
                    {item.area && (
                      <span className="flex items-center gap-1.5">
                        <MdSpaceDashboard className="size-3.5 text-brand-500 dark:text-brand-400" /> {item.area}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-2">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                      <FaUserCircle className="size-3.5 text-brand-400" /> {item.owner}
                    </span>
                    <div className="flex gap-1">
                      {[FaShareAlt, FaHeart, FaPlus].map((Icon, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={(e) => e.preventDefault()}
                          className="p-1.5 rounded-md border border-slate-200 dark:border-slate-700
                                     text-slate-400 hover:text-brand-600 hover:border-brand-300
                                     dark:hover:text-brand-400 dark:hover:border-brand-700
                                     transition-colors duration-150"
                        >
                          <Icon className="size-3" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
