package sk.bazos.repository;

import sk.bazos.model.Add;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by martin.cuchran on 4/10/2018.
 */
public interface AddRepository extends JpaRepository<Add, Long> {
}
