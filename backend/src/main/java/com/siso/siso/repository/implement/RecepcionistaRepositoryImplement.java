package com.siso.siso.repository.implement;

import com.siso.siso.model.Recepcionista;
import com.siso.siso.repository.RecepcionistaRepository;
import com.siso.siso.repository.interfaces.IRecepcionistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RecepcionistaRepositoryImplement implements IRecepcionistaRepository {

    private final RecepcionistaRepository recepcionistaRepository;

    @Autowired
    RecepcionistaRepositoryImplement(RecepcionistaRepository recepcionistarepository) {
        this.recepcionistaRepository = recepcionistarepository;
    }

    @Override
    public Recepcionista save(Recepcionista recepcionista){
        return recepcionistaRepository.save(recepcionista);
    }


}
